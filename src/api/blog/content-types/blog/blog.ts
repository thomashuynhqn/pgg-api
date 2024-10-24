// Interface automatically generated by schemas-to-ts

import { Author } from '../../../author/content-types/author/author';
import { Category } from '../../../category/content-types/category/category';
import { Media } from '../../../../components/shared/interfaces/Media';
import { Author_Plain } from '../../../author/content-types/author/author';
import { Category_Plain } from '../../../category/content-types/category/category';
import { Media_Plain } from '../../../../components/shared/interfaces/Media';
import { AdminPanelRelationPropertyModification } from '../../../../common/schemas-to-ts/AdminPanelRelationPropertyModification';

export interface Blog {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    title: string;
    slug?: string;
    content: any;
    excerpt?: string;
    author?: { data: Author };
    category?: { data: Category };
    publishedDate: Date;
    coverImage?: { data: Media };
    imageInBlock?: { data: Media[] };
    blocks?: any;
  };
}
export interface Blog_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title: string;
  slug?: string;
  content: any;
  excerpt?: string;
  author?: Author_Plain;
  category?: Category_Plain;
  publishedDate: Date;
  coverImage?: Media_Plain;
  imageInBlock?: Media_Plain[];
  blocks?: any;
}

export interface Blog_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title: string;
  slug?: string;
  content: any;
  excerpt?: string;
  author?: number;
  category?: number;
  publishedDate: Date;
  coverImage?: number;
  imageInBlock?: number[];
  blocks?: any;
}

export interface Blog_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title: string;
  slug?: string;
  content: any;
  excerpt?: string;
  author?: AdminPanelRelationPropertyModification<Author_Plain>;
  category?: AdminPanelRelationPropertyModification<Category_Plain>;
  publishedDate: Date;
  coverImage?: AdminPanelRelationPropertyModification<Media_Plain>;
  imageInBlock?: AdminPanelRelationPropertyModification<Media_Plain>[];
  blocks?: any;
}
