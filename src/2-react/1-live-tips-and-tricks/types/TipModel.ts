import type { TagModel } from './TagModel';

export type TipModel = {
    id: string;
    body: string;
    created: string;
    tag: TagModel;
    title: string;
    preview: string;
    author: string;
}