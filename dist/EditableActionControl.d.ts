/// <reference types="react" />
import { ActionControlProps } from '@nodestrap/action-control';
import { EditableControlElement, EditableControlProps } from '@nodestrap/editable-control';
export declare const usesEditableActionControlLayout: () => import("@cssfn/cssfn").Rule;
export declare const usesEditableActionControlVariants: () => import("@cssfn/cssfn").Rule;
export declare const usesEditableActionControlStates: () => import("@cssfn/cssfn").Rule;
export declare const useEditableActionControlSheet: import("@cssfn/types").Factory<import("jss").Classes<"main">>;
export type { EditableControlElement };
export interface EditableActionControlProps<TElement extends EditableControlElement = EditableControlElement> extends EditableControlProps<TElement>, ActionControlProps<TElement> {
}
export declare function EditableActionControl<TElement extends EditableControlElement = EditableControlElement>(props: EditableActionControlProps<TElement>): JSX.Element;
export { EditableActionControl as default };
