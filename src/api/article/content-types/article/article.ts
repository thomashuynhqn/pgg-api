// Interface automatically generated by schemas-to-ts

import { Media } from '../../../../components/shared/interfaces/Media';
import { Author } from '../../../author/content-types/author/author';
import { Category } from '../../../category/content-types/category/category';
import { Media_Plain } from '../../../../components/shared/interfaces/Media';
import { Author_Plain } from '../../../author/content-types/author/author';
import { Category_Plain } from '../../../category/content-types/category/category';
import { AdminPanelRelationPropertyModification } from '../../../../common/schemas-to-ts/AdminPanelRelationPropertyModification';

export interface Article {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    title: string;
    description?: string;
    slug?: string;
    cover: { data: Media };
    author?: { data: Author };
    category?: { data: Category };
    blocks?: any;
    content: string;
    og: { data: Media };
    locale: string;
    localizations?: { data: Article[] };
  };
}
export interface Article_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title: string;
  description?: string;
  slug?: string;
  cover: Media_Plain;
  author?: Author_Plain;
  category?: Category_Plain;
  blocks?: any;
  content: string;
  og: Media_Plain;
  locale: string;
  localizations?: Article_Plain[];
}

export interface Article_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title: string;
  description?: string;
  slug?: string;
  cover: number;
  author?: number;
  category?: number;
  blocks?: any;
  content: string;
  og: number;
  locale: string;
  localizations?: Article[];
}

export interface Article_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title: string;
  description?: string;
  slug?: string;
  cover: AdminPanelRelationPropertyModification<Media_Plain>;
  author?: AdminPanelRelationPropertyModification<Author_Plain>;
  category?: AdminPanelRelationPropertyModification<Category_Plain>;
  blocks?: any;
  content: string;
  og: AdminPanelRelationPropertyModification<Media_Plain>;
  locale: string;
  localizations?: Article[];
}
