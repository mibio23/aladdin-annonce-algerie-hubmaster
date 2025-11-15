export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      advertising_banner_translations: {
        Row: {
          banner_id: string
          button_text: string
          created_at: string
          description: string | null
          id: string
          language_code: string
          subtitle: string | null
          title: string
          updated_at: string
        }
        Insert: {
          banner_id: string
          button_text: string
          created_at?: string
          description?: string | null
          id?: string
          language_code: string
          subtitle?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          banner_id?: string
          button_text?: string
          created_at?: string
          description?: string | null
          id?: string
          language_code?: string
          subtitle?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "advertising_banner_translations_banner_id_fkey"
            columns: ["banner_id"]
            isOneToOne: false
            referencedRelation: "advertising_banners"
            referencedColumns: ["id"]
          },
        ]
      }
      advertising_banners: {
        Row: {
          background_gradient: string
          button_text: string
          created_at: string
          created_by: string | null
          description: string | null
          end_at: string | null
          icon_emoji: string | null
          id: string
          image_url: string | null
          is_active: boolean
          link_url: string | null
          position_order: number
          subtitle: string | null
          title: string
          updated_at: string
        }
        Insert: {
          background_gradient?: string
          button_text?: string
          created_at?: string
          created_by?: string | null
          description?: string | null
          end_at?: string | null
          icon_emoji?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean
          link_url?: string | null
          position_order?: number
          subtitle?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          background_gradient?: string
          button_text?: string
          created_at?: string
          created_by?: string | null
          description?: string | null
          end_at?: string | null
          icon_emoji?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean
          link_url?: string | null
          position_order?: number
          subtitle?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      ai_learning_data: {
        Row: {
          ai_output: string
          confidence_score: number | null
          created_at: string
          feedback_score: number | null
          id: string
          improvement_applied: boolean | null
          intent_detected: string | null
          updated_at: string
          user_input: string
        }
        Insert: {
          ai_output: string
          confidence_score?: number | null
          created_at?: string
          feedback_score?: number | null
          id?: string
          improvement_applied?: boolean | null
          intent_detected?: string | null
          updated_at?: string
          user_input: string
        }
        Update: {
          ai_output?: string
          confidence_score?: number | null
          created_at?: string
          feedback_score?: number | null
          id?: string
          improvement_applied?: boolean | null
          intent_detected?: string | null
          updated_at?: string
          user_input?: string
        }
        Relationships: []
      }
      announcement_embeddings: {
        Row: {
          announcement_id: string
          created_at: string | null
          embedding: string
          id: number
        }
        Insert: {
          announcement_id: string
          created_at?: string | null
          embedding: string
          id?: never
        }
        Update: {
          announcement_id?: string
          created_at?: string | null
          embedding?: string
          id?: never
        }
        Relationships: [
          {
            foreignKeyName: "announcement_embeddings_announcement_id_fkey"
            columns: ["announcement_id"]
            isOneToOne: false
            referencedRelation: "announcements"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "announcement_embeddings_announcement_id_fkey"
            columns: ["announcement_id"]
            isOneToOne: false
            referencedRelation: "announcements_public"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "announcement_embeddings_announcement_id_fkey"
            columns: ["announcement_id"]
            isOneToOne: false
            referencedRelation: "announcements_safe"
            referencedColumns: ["id"]
          },
        ]
      }
      announcement_favorites: {
        Row: {
          announcement_id: string
          created_at: string
          id: string
          user_id: string
        }
        Insert: {
          announcement_id: string
          created_at?: string
          id?: string
          user_id: string
        }
        Update: {
          announcement_id?: string
          created_at?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "announcement_favorites_announcement_id_fkey"
            columns: ["announcement_id"]
            isOneToOne: false
            referencedRelation: "announcements"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "announcement_favorites_announcement_id_fkey"
            columns: ["announcement_id"]
            isOneToOne: false
            referencedRelation: "announcements_public"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "announcement_favorites_announcement_id_fkey"
            columns: ["announcement_id"]
            isOneToOne: false
            referencedRelation: "announcements_safe"
            referencedColumns: ["id"]
          },
        ]
      }
      announcements: {
        Row: {
          address: string | null
          availability_date: string | null
          brand: string | null
          cash_discount: number | null
          category_id: string | null
          color: string | null
          commune: string | null
          condition: string | null
          contact_count: number
          created_at: string
          currency: string | null
          delivery_areas: string[] | null
          delivery_available: boolean | null
          delivery_fees: number | null
          delivery_location_name: string | null
          description: string | null
          detail_photos: string[] | null
          dimensions: string | null
          documentation: string[] | null
          email: string | null
          exchange_possible: boolean | null
          expires_at: string | null
          has_invoice: boolean | null
          id: string
          image_url: string | null
          image_urls: string[] | null
          images: string[] | null
          included_accessories: string[] | null
          is_featured: boolean | null
          is_negotiable: boolean | null
          is_urgent: boolean
          keywords: string[] | null
          location: string | null
          model: string | null
          original_price: number | null
          packaging_info: string | null
          phone_number: string | null
          price: number | null
          product_video: string | null
          purchase_year: number | null
          search_vector: unknown | null
          selling_reason: string | null
          shop_id: string | null
          shop_logo_url: string | null
          shop_name: string | null
          status: string
          subcategory_id: string | null
          title: string
          type: string
          updated_at: string
          urgent_message: string | null
          user_id: string | null
          view_count: number
          warranty_duration: string | null
          weight: string | null
          wilaya: string | null
        }
        Insert: {
          address?: string | null
          availability_date?: string | null
          brand?: string | null
          cash_discount?: number | null
          category_id?: string | null
          color?: string | null
          commune?: string | null
          condition?: string | null
          contact_count?: number
          created_at?: string
          currency?: string | null
          delivery_areas?: string[] | null
          delivery_available?: boolean | null
          delivery_fees?: number | null
          delivery_location_name?: string | null
          description?: string | null
          detail_photos?: string[] | null
          dimensions?: string | null
          documentation?: string[] | null
          email?: string | null
          exchange_possible?: boolean | null
          expires_at?: string | null
          has_invoice?: boolean | null
          id?: string
          image_url?: string | null
          image_urls?: string[] | null
          images?: string[] | null
          included_accessories?: string[] | null
          is_featured?: boolean | null
          is_negotiable?: boolean | null
          is_urgent?: boolean
          keywords?: string[] | null
          location?: string | null
          model?: string | null
          original_price?: number | null
          packaging_info?: string | null
          phone_number?: string | null
          price?: number | null
          product_video?: string | null
          purchase_year?: number | null
          search_vector?: unknown | null
          selling_reason?: string | null
          shop_id?: string | null
          shop_logo_url?: string | null
          shop_name?: string | null
          status?: string
          subcategory_id?: string | null
          title: string
          type?: string
          updated_at?: string
          urgent_message?: string | null
          user_id?: string | null
          view_count?: number
          warranty_duration?: string | null
          weight?: string | null
          wilaya?: string | null
        }
        Update: {
          address?: string | null
          availability_date?: string | null
          brand?: string | null
          cash_discount?: number | null
          category_id?: string | null
          color?: string | null
          commune?: string | null
          condition?: string | null
          contact_count?: number
          created_at?: string
          currency?: string | null
          delivery_areas?: string[] | null
          delivery_available?: boolean | null
          delivery_fees?: number | null
          delivery_location_name?: string | null
          description?: string | null
          detail_photos?: string[] | null
          dimensions?: string | null
          documentation?: string[] | null
          email?: string | null
          exchange_possible?: boolean | null
          expires_at?: string | null
          has_invoice?: boolean | null
          id?: string
          image_url?: string | null
          image_urls?: string[] | null
          images?: string[] | null
          included_accessories?: string[] | null
          is_featured?: boolean | null
          is_negotiable?: boolean | null
          is_urgent?: boolean
          keywords?: string[] | null
          location?: string | null
          model?: string | null
          original_price?: number | null
          packaging_info?: string | null
          phone_number?: string | null
          price?: number | null
          product_video?: string | null
          purchase_year?: number | null
          search_vector?: unknown | null
          selling_reason?: string | null
          shop_id?: string | null
          shop_logo_url?: string | null
          shop_name?: string | null
          status?: string
          subcategory_id?: string | null
          title?: string
          type?: string
          updated_at?: string
          urgent_message?: string | null
          user_id?: string | null
          view_count?: number
          warranty_duration?: string | null
          weight?: string | null
          wilaya?: string | null
        }
        Relationships: []
      }
      anticipation_suggestions: {
        Row: {
          confidence_score: number | null
          context_data: Json | null
          created_at: string
          id: string
          is_clicked: boolean | null
          is_helpful: boolean | null
          session_id: string
          suggestion_content: string
          suggestion_type: string
        }
        Insert: {
          confidence_score?: number | null
          context_data?: Json | null
          created_at?: string
          id?: string
          is_clicked?: boolean | null
          is_helpful?: boolean | null
          session_id: string
          suggestion_content: string
          suggestion_type: string
        }
        Update: {
          confidence_score?: number | null
          context_data?: Json | null
          created_at?: string
          id?: string
          is_clicked?: boolean | null
          is_helpful?: boolean | null
          session_id?: string
          suggestion_content?: string
          suggestion_type?: string
        }
        Relationships: []
      }
      auto_corrections: {
        Row: {
          approval_rate: number
          confidence_score: number
          correct_term: string
          correction_type: string
          created_at: string
          id: string
          incorrect_term: string
          is_active: boolean
          language_code: string
          updated_at: string
          usage_count: number
        }
        Insert: {
          approval_rate?: number
          confidence_score?: number
          correct_term: string
          correction_type: string
          created_at?: string
          id?: string
          incorrect_term: string
          is_active?: boolean
          language_code?: string
          updated_at?: string
          usage_count?: number
        }
        Update: {
          approval_rate?: number
          confidence_score?: number
          correct_term?: string
          correction_type?: string
          created_at?: string
          id?: string
          incorrect_term?: string
          is_active?: boolean
          language_code?: string
          updated_at?: string
          usage_count?: number
        }
        Relationships: []
      }
      behavioral_learning: {
        Row: {
          behavior_type: string
          context_data: Json | null
          created_at: string
          id: string
          outcome_data: Json | null
          session_duration: number | null
          session_id: string
          timestamp_sequence: number
          user_id: string | null
        }
        Insert: {
          behavior_type: string
          context_data?: Json | null
          created_at?: string
          id?: string
          outcome_data?: Json | null
          session_duration?: number | null
          session_id: string
          timestamp_sequence: number
          user_id?: string | null
        }
        Update: {
          behavior_type?: string
          context_data?: Json | null
          created_at?: string
          id?: string
          outcome_data?: Json | null
          session_duration?: number | null
          session_id?: string
          timestamp_sequence?: number
          user_id?: string | null
        }
        Relationships: []
      }
      business_contacts: {
        Row: {
          contact_type: string
          contact_value: string
          created_at: string
          id: string
          is_public: boolean
          requires_auth: boolean
          shop_id: string
          updated_at: string
        }
        Insert: {
          contact_type: string
          contact_value: string
          created_at?: string
          id?: string
          is_public?: boolean
          requires_auth?: boolean
          shop_id: string
          updated_at?: string
        }
        Update: {
          contact_type?: string
          contact_value?: string
          created_at?: string
          id?: string
          is_public?: boolean
          requires_auth?: boolean
          shop_id?: string
          updated_at?: string
        }
        Relationships: []
      }
      categories: {
        Row: {
          created_at: string
          description: string | null
          icon: string | null
          id: number
          id_uuid: string | null
          image_url: string | null
          is_active: boolean | null
          name: string
          parent_id: number | null
          parent_id_uuid: string | null
          position_order: number | null
          slug: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: number
          id_uuid?: string | null
          image_url?: string | null
          is_active?: boolean | null
          name: string
          parent_id?: number | null
          parent_id_uuid?: string | null
          position_order?: number | null
          slug: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: number
          id_uuid?: string | null
          image_url?: string | null
          is_active?: boolean | null
          name?: string
          parent_id?: number | null
          parent_id_uuid?: string | null
          position_order?: number | null
          slug?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "categories_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "categories_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "categories_with_translations"
            referencedColumns: ["id"]
          },
        ]
      }
      category_images: {
        Row: {
          alt_text: string | null
          category_id: number
          created_at: string | null
          id: number
          image_type: string | null
          image_url: string
          updated_at: string | null
        }
        Insert: {
          alt_text?: string | null
          category_id: number
          created_at?: string | null
          id?: never
          image_type?: string | null
          image_url: string
          updated_at?: string | null
        }
        Update: {
          alt_text?: string | null
          category_id?: number
          created_at?: string | null
          id?: never
          image_type?: string | null
          image_url?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "category_images_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "category_images_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories_with_translations"
            referencedColumns: ["id"]
          },
        ]
      }
      category_tags: {
        Row: {
          category_id: number
          created_at: string | null
          id: number
          tag: string
        }
        Insert: {
          category_id: number
          created_at?: string | null
          id?: never
          tag: string
        }
        Update: {
          category_id?: number
          created_at?: string | null
          id?: never
          tag?: string
        }
        Relationships: [
          {
            foreignKeyName: "category_tags_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "category_tags_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories_with_translations"
            referencedColumns: ["id"]
          },
        ]
      }
      category_translations: {
        Row: {
          category_id: number
          created_at: string | null
          description: string | null
          id: number
          language_code: string
          meta_description: string | null
          meta_title: string | null
          name: string
          updated_at: string | null
        }
        Insert: {
          category_id: number
          created_at?: string | null
          description?: string | null
          id?: never
          language_code: string
          meta_description?: string | null
          meta_title?: string | null
          name: string
          updated_at?: string | null
        }
        Update: {
          category_id?: number
          created_at?: string | null
          description?: string | null
          id?: never
          language_code?: string
          meta_description?: string | null
          meta_title?: string | null
          name?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "category_translations_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "category_translations_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories_with_translations"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_requests: {
        Row: {
          announcement_id: string
          created_at: string
          id: string
          message: string | null
          requester_email: string
          requester_name: string
          status: string
          updated_at: string
        }
        Insert: {
          announcement_id: string
          created_at?: string
          id?: string
          message?: string | null
          requester_email: string
          requester_name: string
          status?: string
          updated_at?: string
        }
        Update: {
          announcement_id?: string
          created_at?: string
          id?: string
          message?: string | null
          requester_email?: string
          requester_name?: string
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      contextual_intelligence: {
        Row: {
          accuracy_score: number
          context_key: string
          context_value: Json
          created_at: string
          id: string
          is_active: boolean
          last_validated: string | null
          prediction_data: Json | null
          updated_at: string
          usage_frequency: number
        }
        Insert: {
          accuracy_score?: number
          context_key: string
          context_value: Json
          created_at?: string
          id?: string
          is_active?: boolean
          last_validated?: string | null
          prediction_data?: Json | null
          updated_at?: string
          usage_frequency?: number
        }
        Update: {
          accuracy_score?: number
          context_key?: string
          context_value?: Json
          created_at?: string
          id?: string
          is_active?: boolean
          last_validated?: string | null
          prediction_data?: Json | null
          updated_at?: string
          usage_frequency?: number
        }
        Relationships: []
      }
      conversation_memory: {
        Row: {
          content: string
          created_at: string
          id: string
          metadata: Json | null
          role: string
          session_id: string
          updated_at: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          metadata?: Json | null
          role: string
          session_id: string
          updated_at?: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          metadata?: Json | null
          role?: string
          session_id?: string
          updated_at?: string
        }
        Relationships: []
      }
      conversations: {
        Row: {
          created_at: string | null
          id: string
          status: string | null
          title: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          status?: string | null
          title?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          status?: string | null
          title?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      notifications: {
        Row: {
          created_at: string | null
          id: string
          message: string | null
          read: boolean | null
          title: string
          type: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          message?: string | null
          read?: boolean | null
          title: string
          type?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          message?: string | null
          read?: boolean | null
          title?: string
          type?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      popular_keywords: {
        Row: {
          category_context: string[] | null
          created_at: string
          id: string
          keyword: string
          keyword_normalized: string
          last_searched: string | null
          search_count: number | null
          success_rate: number | null
          trending_score: number | null
          updated_at: string
        }
        Insert: {
          category_context?: string[] | null
          created_at?: string
          id?: string
          keyword: string
          keyword_normalized: string
          last_searched?: string | null
          search_count?: number | null
          success_rate?: number | null
          trending_score?: number | null
          updated_at?: string
        }
        Update: {
          category_context?: string[] | null
          created_at?: string
          id?: string
          keyword?: string
          keyword_normalized?: string
          last_searched?: string | null
          search_count?: number | null
          success_rate?: number | null
          trending_score?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          address: string | null
          avatar_url: string | null
          bio: string | null
          commune: string | null
          country: string | null
          created_at: string | null
          date_of_birth: string | null
          display_name: string | null
          first_name: string | null
          gender: string | null
          id: string
          last_name: string | null
          location: string | null
          nickname: string | null
          phone: string | null
          phone_secondary: string | null
          phone_tertiary: string | null
          profession: string | null
          profile_locked: boolean | null
          updated_at: string | null
          user_id: string | null
          wilaya: string | null
        }
        Insert: {
          address?: string | null
          avatar_url?: string | null
          bio?: string | null
          commune?: string | null
          country?: string | null
          created_at?: string | null
          date_of_birth?: string | null
          display_name?: string | null
          first_name?: string | null
          gender?: string | null
          id?: string
          last_name?: string | null
          location?: string | null
          nickname?: string | null
          phone?: string | null
          phone_secondary?: string | null
          phone_tertiary?: string | null
          profession?: string | null
          profile_locked?: boolean | null
          updated_at?: string | null
          user_id?: string | null
          wilaya?: string | null
        }
        Update: {
          address?: string | null
          avatar_url?: string | null
          bio?: string | null
          commune?: string | null
          country?: string | null
          created_at?: string | null
          date_of_birth?: string | null
          display_name?: string | null
          first_name?: string | null
          gender?: string | null
          id?: string
          last_name?: string | null
          location?: string | null
          nickname?: string | null
          phone?: string | null
          phone_secondary?: string | null
          phone_tertiary?: string | null
          profession?: string | null
          profile_locked?: boolean | null
          updated_at?: string | null
          user_id?: string | null
          wilaya?: string | null
        }
        Relationships: []
      }
      real_time_trends: {
        Row: {
          category: string | null
          created_at: string
          growth_rate: number | null
          id: string
          keyword: string
          language: string | null
          search_volume: number | null
          time_period: string | null
          trend_score: number | null
          updated_at: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          growth_rate?: number | null
          id?: string
          keyword: string
          language?: string | null
          search_volume?: number | null
          time_period?: string | null
          trend_score?: number | null
          updated_at?: string
        }
        Update: {
          category?: string | null
          created_at?: string
          growth_rate?: number | null
          id?: string
          keyword?: string
          language?: string | null
          search_volume?: number | null
          time_period?: string | null
          trend_score?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      saved_searches: {
        Row: {
          created_at: string
          filters: Json | null
          id: string
          last_checked: string | null
          name: string
          notification_enabled: boolean | null
          query: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          filters?: Json | null
          id?: string
          last_checked?: string | null
          name: string
          notification_enabled?: boolean | null
          query: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          filters?: Json | null
          id?: string
          last_checked?: string | null
          name?: string
          notification_enabled?: boolean | null
          query?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      search_history: {
        Row: {
          created_at: string
          filters: Json | null
          id: string
          query: string
          results_count: number | null
          search_time: number | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          filters?: Json | null
          id?: string
          query: string
          results_count?: number | null
          search_time?: number | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          filters?: Json | null
          id?: string
          query?: string
          results_count?: number | null
          search_time?: number | null
          user_id?: string | null
        }
        Relationships: []
      }
      search_patterns_advanced: {
        Row: {
          conversion_data: Json | null
          created_at: string
          id: string
          pattern_frequency: number
          pattern_hash: string
          search_sequence: string[]
          success_indicators: Json | null
          success_rate: number
          updated_at: string
          user_context: Json | null
        }
        Insert: {
          conversion_data?: Json | null
          created_at?: string
          id?: string
          pattern_frequency?: number
          pattern_hash: string
          search_sequence: string[]
          success_indicators?: Json | null
          success_rate?: number
          updated_at?: string
          user_context?: Json | null
        }
        Update: {
          conversion_data?: Json | null
          created_at?: string
          id?: string
          pattern_frequency?: number
          pattern_hash?: string
          search_sequence?: string[]
          success_indicators?: Json | null
          success_rate?: number
          updated_at?: string
          user_context?: Json | null
        }
        Relationships: []
      }
      search_queries: {
        Row: {
          created_at: string
          id: string
          ip_hash: string | null
          language_detected: string | null
          query_normalized: string
          query_text: string
          results_count: number | null
          search_context: string | null
          user_session_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          ip_hash?: string | null
          language_detected?: string | null
          query_normalized: string
          query_text: string
          results_count?: number | null
          search_context?: string | null
          user_session_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          ip_hash?: string | null
          language_detected?: string | null
          query_normalized?: string
          query_text?: string
          results_count?: number | null
          search_context?: string | null
          user_session_id?: string | null
        }
        Relationships: []
      }
      search_results_clicks: {
        Row: {
          click_position: number
          created_at: string
          id: string
          result_id: string
          result_type: string
          search_query_id: string | null
          session_id: string | null
          time_to_click: number | null
        }
        Insert: {
          click_position: number
          created_at?: string
          id?: string
          result_id: string
          result_type: string
          search_query_id?: string | null
          session_id?: string | null
          time_to_click?: number | null
        }
        Update: {
          click_position?: number
          created_at?: string
          id?: string
          result_id?: string
          result_type?: string
          search_query_id?: string | null
          session_id?: string | null
          time_to_click?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "search_results_clicks_search_query_id_fkey"
            columns: ["search_query_id"]
            isOneToOne: false
            referencedRelation: "search_queries"
            referencedColumns: ["id"]
          },
        ]
      }
      search_suggestions: {
        Row: {
          confidence_score: number | null
          created_at: string
          id: string
          is_active: boolean | null
          original_query: string
          success_rate: number | null
          suggested_query: string
          suggestion_type: string
          updated_at: string
          usage_count: number | null
        }
        Insert: {
          confidence_score?: number | null
          created_at?: string
          id?: string
          is_active?: boolean | null
          original_query: string
          success_rate?: number | null
          suggested_query: string
          suggestion_type: string
          updated_at?: string
          usage_count?: number | null
        }
        Update: {
          confidence_score?: number | null
          created_at?: string
          id?: string
          is_active?: boolean | null
          original_query?: string
          success_rate?: number | null
          suggested_query?: string
          suggestion_type?: string
          updated_at?: string
          usage_count?: number | null
        }
        Relationships: []
      }
      security_audit_log: {
        Row: {
          action_type: string
          created_at: string
          id: string
          ip_address: unknown | null
          metadata: Json | null
          resource_id: string | null
          resource_type: string
          session_id: string | null
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          action_type: string
          created_at?: string
          id?: string
          ip_address?: unknown | null
          metadata?: Json | null
          resource_id?: string | null
          resource_type: string
          session_id?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          action_type?: string
          created_at?: string
          id?: string
          ip_address?: unknown | null
          metadata?: Json | null
          resource_id?: string | null
          resource_type?: string
          session_id?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      semantic_mappings: {
        Row: {
          confidence_score: number
          created_at: string
          id: string
          is_active: boolean
          language_code: string
          mapping_type: string
          source_term: string
          success_rate: number
          target_term: string
          updated_at: string
          usage_count: number
        }
        Insert: {
          confidence_score?: number
          created_at?: string
          id?: string
          is_active?: boolean
          language_code?: string
          mapping_type: string
          source_term: string
          success_rate?: number
          target_term: string
          updated_at?: string
          usage_count?: number
        }
        Update: {
          confidence_score?: number
          created_at?: string
          id?: string
          is_active?: boolean
          language_code?: string
          mapping_type?: string
          source_term?: string
          success_rate?: number
          target_term?: string
          updated_at?: string
          usage_count?: number
        }
        Relationships: []
      }
      shop_images: {
        Row: {
          created_at: string
          display_order: number | null
          id: string
          image_type: string
          image_url: string
          shop_id: string
        }
        Insert: {
          created_at?: string
          display_order?: number | null
          id?: string
          image_type?: string
          image_url: string
          shop_id: string
        }
        Update: {
          created_at?: string
          display_order?: number | null
          id?: string
          image_type?: string
          image_url?: string
          shop_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "shop_images_shop_id_fkey"
            columns: ["shop_id"]
            isOneToOne: false
            referencedRelation: "shops"
            referencedColumns: ["id"]
          },
        ]
      }
      shop_translations: {
        Row: {
          created_at: string
          description: string | null
          id: string
          language_code: string
          name: string
          shop_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          language_code: string
          name: string
          shop_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          language_code?: string
          name?: string
          shop_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "shop_translations_shop_id_fkey"
            columns: ["shop_id"]
            isOneToOne: false
            referencedRelation: "shops"
            referencedColumns: ["id"]
          },
        ]
      }
      shops: {
        Row: {
          address: string | null
          banner_url: string | null
          business_hours: Json | null
          category_ids: string[] | null
          commune: string | null
          created_at: string
          delivery_zones: string[] | null
          description: string | null
          email: string | null
          facebook_url: string | null
          has_delivery: boolean | null
          id: string
          instagram_url: string | null
          is_active: boolean | null
          is_online: boolean | null
          is_verified: boolean | null
          logo_url: string | null
          name: string
          phone_numbers: string[] | null
          slug: string
          updated_at: string
          user_id: string
          website_url: string | null
          whatsapp_number: string | null
          wilaya: string | null
        }
        Insert: {
          address?: string | null
          banner_url?: string | null
          business_hours?: Json | null
          category_ids?: string[] | null
          commune?: string | null
          created_at?: string
          delivery_zones?: string[] | null
          description?: string | null
          email?: string | null
          facebook_url?: string | null
          has_delivery?: boolean | null
          id?: string
          instagram_url?: string | null
          is_active?: boolean | null
          is_online?: boolean | null
          is_verified?: boolean | null
          logo_url?: string | null
          name: string
          phone_numbers?: string[] | null
          slug: string
          updated_at?: string
          user_id: string
          website_url?: string | null
          whatsapp_number?: string | null
          wilaya?: string | null
        }
        Update: {
          address?: string | null
          banner_url?: string | null
          business_hours?: Json | null
          category_ids?: string[] | null
          commune?: string | null
          created_at?: string
          delivery_zones?: string[] | null
          description?: string | null
          email?: string | null
          facebook_url?: string | null
          has_delivery?: boolean | null
          id?: string
          instagram_url?: string | null
          is_active?: boolean | null
          is_online?: boolean | null
          is_verified?: boolean | null
          logo_url?: string | null
          name?: string
          phone_numbers?: string[] | null
          slug?: string
          updated_at?: string
          user_id?: string
          website_url?: string | null
          whatsapp_number?: string | null
          wilaya?: string | null
        }
        Relationships: []
      }
      site_settings: {
        Row: {
          created_at: string
          id: string
          is_active: boolean
          setting_key: string
          setting_value: Json
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_active?: boolean
          setting_key: string
          setting_value?: Json
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          is_active?: boolean
          setting_key?: string
          setting_value?: Json
          updated_at?: string
        }
        Relationships: []
      }
      user_drafts: {
        Row: {
          created_at: string
          draft_data: Json
          draft_key: string
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          draft_data: Json
          draft_key: string
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          draft_data?: Json
          draft_key?: string
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_intelligent_profiles: {
        Row: {
          behavior_patterns: Json | null
          created_at: string
          id: string
          interaction_history: Json | null
          last_activity: string
          predicted_interests: Json | null
          preferences: Json | null
          search_patterns: Json | null
          session_id: string
          updated_at: string
        }
        Insert: {
          behavior_patterns?: Json | null
          created_at?: string
          id?: string
          interaction_history?: Json | null
          last_activity?: string
          predicted_interests?: Json | null
          preferences?: Json | null
          search_patterns?: Json | null
          session_id: string
          updated_at?: string
        }
        Update: {
          behavior_patterns?: Json | null
          created_at?: string
          id?: string
          interaction_history?: Json | null
          last_activity?: string
          predicted_interests?: Json | null
          preferences?: Json | null
          search_patterns?: Json | null
          session_id?: string
          updated_at?: string
        }
        Relationships: []
      }
      user_privacy_consents: {
        Row: {
          consent_given: boolean
          consent_type: string
          consent_version: string
          created_at: string
          id: string
          ip_address: unknown | null
          session_id: string
          updated_at: string
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          consent_given?: boolean
          consent_type: string
          consent_version?: string
          created_at?: string
          id?: string
          ip_address?: unknown | null
          session_id: string
          updated_at?: string
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          consent_given?: boolean
          consent_type?: string
          consent_version?: string
          created_at?: string
          id?: string
          ip_address?: unknown | null
          session_id?: string
          updated_at?: string
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          granted_at: string
          granted_by: string | null
          id: string
          is_active: boolean | null
          role: string
          user_id: string
        }
        Insert: {
          granted_at?: string
          granted_by?: string | null
          id?: string
          is_active?: boolean | null
          role: string
          user_id: string
        }
        Update: {
          granted_at?: string
          granted_by?: string | null
          id?: string
          is_active?: boolean | null
          role?: string
          user_id?: string
        }
        Relationships: []
      }
      user_search_patterns: {
        Row: {
          conversion_achieved: boolean | null
          created_at: string
          id: string
          pattern_type: string | null
          search_categories: string[] | null
          search_sequence: string[] | null
          search_timespan: number | null
          session_id: string
        }
        Insert: {
          conversion_achieved?: boolean | null
          created_at?: string
          id?: string
          pattern_type?: string | null
          search_categories?: string[] | null
          search_sequence?: string[] | null
          search_timespan?: number | null
          session_id: string
        }
        Update: {
          conversion_achieved?: boolean | null
          created_at?: string
          id?: string
          pattern_type?: string | null
          search_categories?: string[] | null
          search_sequence?: string[] | null
          search_timespan?: number | null
          session_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      announcements_public: {
        Row: {
          category_id: string | null
          condition: string | null
          created_at: string | null
          description: string | null
          expires_at: string | null
          has_contact_info: boolean | null
          id: string | null
          image_url: string | null
          image_urls: string[] | null
          is_urgent: boolean | null
          keywords: string[] | null
          location: string | null
          price: number | null
          shop_id: string | null
          shop_logo_url: string | null
          shop_name: string | null
          status: string | null
          title: string | null
          type: string | null
          updated_at: string | null
          urgent_message: string | null
          view_count: number | null
        }
        Insert: {
          category_id?: string | null
          condition?: string | null
          created_at?: string | null
          description?: string | null
          expires_at?: string | null
          has_contact_info?: never
          id?: string | null
          image_url?: string | null
          image_urls?: string[] | null
          is_urgent?: boolean | null
          keywords?: string[] | null
          location?: string | null
          price?: number | null
          shop_id?: string | null
          shop_logo_url?: string | null
          shop_name?: string | null
          status?: string | null
          title?: string | null
          type?: string | null
          updated_at?: string | null
          urgent_message?: string | null
          view_count?: number | null
        }
        Update: {
          category_id?: string | null
          condition?: string | null
          created_at?: string | null
          description?: string | null
          expires_at?: string | null
          has_contact_info?: never
          id?: string | null
          image_url?: string | null
          image_urls?: string[] | null
          is_urgent?: boolean | null
          keywords?: string[] | null
          location?: string | null
          price?: number | null
          shop_id?: string | null
          shop_logo_url?: string | null
          shop_name?: string | null
          status?: string | null
          title?: string | null
          type?: string | null
          updated_at?: string | null
          urgent_message?: string | null
          view_count?: number | null
        }
        Relationships: []
      }
      announcements_safe: {
        Row: {
          category_id: string | null
          condition: string | null
          contact_count: number | null
          created_at: string | null
          description: string | null
          expires_at: string | null
          id: string | null
          image_url: string | null
          image_urls: string[] | null
          is_urgent: boolean | null
          keywords: string[] | null
          location: string | null
          phone_number: string | null
          phone_number_masked: string | null
          price: number | null
          shop_id: string | null
          shop_logo_url: string | null
          shop_name: string | null
          status: string | null
          title: string | null
          type: string | null
          updated_at: string | null
          urgent_message: string | null
          user_id: string | null
          view_count: number | null
        }
        Insert: {
          category_id?: string | null
          condition?: string | null
          contact_count?: number | null
          created_at?: string | null
          description?: string | null
          expires_at?: string | null
          id?: string | null
          image_url?: string | null
          image_urls?: string[] | null
          is_urgent?: boolean | null
          keywords?: string[] | null
          location?: string | null
          phone_number?: never
          phone_number_masked?: never
          price?: number | null
          shop_id?: string | null
          shop_logo_url?: string | null
          shop_name?: string | null
          status?: string | null
          title?: string | null
          type?: string | null
          updated_at?: string | null
          urgent_message?: string | null
          user_id?: string | null
          view_count?: number | null
        }
        Update: {
          category_id?: string | null
          condition?: string | null
          contact_count?: number | null
          created_at?: string | null
          description?: string | null
          expires_at?: string | null
          id?: string | null
          image_url?: string | null
          image_urls?: string[] | null
          is_urgent?: boolean | null
          keywords?: string[] | null
          location?: string | null
          phone_number?: never
          phone_number_masked?: never
          price?: number | null
          shop_id?: string | null
          shop_logo_url?: string | null
          shop_name?: string | null
          status?: string | null
          title?: string | null
          type?: string | null
          updated_at?: string | null
          urgent_message?: string | null
          user_id?: string | null
          view_count?: number | null
        }
        Relationships: []
      }
      categories_with_translations: {
        Row: {
          category_alt_text: string | null
          category_image_url: string | null
          created_at: string | null
          description: string | null
          icon: string | null
          id: number | null
          id_uuid: string | null
          image_url: string | null
          is_active: boolean | null
          language_code: string | null
          name: string | null
          parent_id: number | null
          parent_id_uuid: string | null
          position_order: number | null
          slug: string | null
          translated_description: string | null
          translated_name: string | null
          updated_at: string | null
        }
        Relationships: [
          {
            foreignKeyName: "categories_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "categories_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "categories_with_translations"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      calculate_trending_score: {
        Args: { keyword_id: string }
        Returns: number
      }
      cleanup_old_tracking_data: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      enforce_data_retention: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      execute_sql: {
        Args: { sql_statement: string }
        Returns: undefined
      }
      generate_shop_slug: {
        Args: { shop_name: string }
        Returns: string
      }
      get_announcement_with_protected_contact: {
        Args: { announcement_id: string }
        Returns: {
          category_id: string
          condition: string
          contact_count: number
          created_at: string
          description: string
          expires_at: string
          id: string
          image_url: string
          image_urls: string[]
          is_urgent: boolean
          keywords: string[]
          location: string
          phone_number_masked: string
          price: number
          requires_auth_for_contact: boolean
          shop_id: string
          shop_logo_url: string
          shop_name: string
          status: string
          title: string
          type: string
          updated_at: string
          urgent_message: string
          user_id: string
          view_count: number
        }[]
      }
      get_current_session: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_current_user_id: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_masked_profile_contact: {
        Args: { profile_user_id: string }
        Returns: {
          display_name: string
          location: string
          phone_masked: string
          profession: string
        }[]
      }
      get_public_announcements: {
        Args: {
          p_category_id?: string
          p_limit?: number
          p_location?: string
          p_offset?: number
        }
        Returns: {
          category_id: string
          condition: string
          contact_count: number
          created_at: string
          description: string
          expires_at: string
          id: string
          image_url: string
          image_urls: string[]
          is_urgent: boolean
          keywords: string[]
          location: string
          phone_number_masked: string
          phone_number_visible: boolean
          price: number
          shop_id: string
          shop_logo_url: string
          shop_name: string
          status: string
          title: string
          type: string
          updated_at: string
          urgent_message: string
          view_count: number
        }[]
      }
      get_public_profile_data: {
        Args: { profile_user_id: string }
        Returns: {
          avatar_url: string
          bio: string
          created_at: string
          display_name: string
          id: string
          location: string
          profession: string
          user_id: string
        }[]
      }
      get_safe_profile_data: {
        Args: { profile_user_id: string }
        Returns: {
          avatar_url: string
          bio: string
          created_at: string
          display_name: string
          id: string
          location: string
          profession: string
        }[]
      }
      get_search_statistics: {
        Args: { days_back?: number }
        Returns: {
          daily_searches: number
          search_date: string
          unique_users: number
        }[]
      }
      gtrgm_compress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_decompress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_options: {
        Args: { "": unknown }
        Returns: undefined
      }
      gtrgm_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      increment_contact_count: {
        Args: { announcement_uuid: string }
        Returns: undefined
      }
      increment_view_count: {
        Args: { announcement_uuid: string }
        Returns: undefined
      }
      is_admin: {
        Args: { user_uuid: string }
        Returns: boolean
      }
      log_phone_access: {
        Args: { p_announcement_id: string; p_user_id?: string }
        Returns: undefined
      }
      log_security_event: {
        Args: {
          p_action_type: string
          p_metadata?: Json
          p_resource_id?: string
          p_resource_type: string
          p_session_id: string
          p_user_id: string
        }
        Returns: undefined
      }
      mask_phone_number: {
        Args: { phone_number: string }
        Returns: string
      }
      match_announcements: {
        Args: {
          match_count: number
          match_threshold: number
          query_embedding: string
        }
        Returns: {
          category_id: number
          description: string
          id: number
          price: number
          similarity: number
          title: string
        }[]
      }
      normalize_search_query: {
        Args: { query_text: string }
        Returns: string
      }
      rate_limit_contact_access: {
        Args: { contact_type: string; user_session: string }
        Returns: boolean
      }
      rate_limit_search_queries: {
        Args: { user_session: string }
        Returns: boolean
      }
      request_contact_access: {
        Args: { announcement_id: string }
        Returns: {
          contact_allowed: boolean
          phone_number: string
        }[]
      }
      sanitize_search_query: {
        Args: { query_text: string }
        Returns: string
      }
      set_current_session: {
        Args: { session_id: string }
        Returns: undefined
      }
      set_limit: {
        Args: { "": number }
        Returns: number
      }
      show_limit: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      show_trgm: {
        Args: { "": string }
        Returns: string[]
      }
      unaccent: {
        Args: { "": string }
        Returns: string
      }
      unaccent_init: {
        Args: { "": unknown }
        Returns: unknown
      }
      validate_password_strength: {
        Args: { password_text: string }
        Returns: boolean
      }
      validate_search_session: {
        Args: { session_id: string }
        Returns: boolean
      }
      validate_user_input: {
        Args: { input_text: string; max_length?: number }
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
