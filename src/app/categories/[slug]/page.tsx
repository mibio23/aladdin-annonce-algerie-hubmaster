'use client';

import React from 'react';
import { CategoryProvider, CategoryPage } from '@/components/categories';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export default function CategoryPageWrapper({ params }: CategoryPageProps) {
  const categorySlug = params.slug;

  return (
    <CategoryProvider initialCategorySlug={categorySlug}>
      <CategoryPage categorySlug={categorySlug} />
    </CategoryProvider>
  );
}