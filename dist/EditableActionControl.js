// react:
import { default as React, } from 'react'; // base technology of our nodestrap components
// cssfn:
import { 
// compositions:
mainComposition, 
// styles:
style, imports, } from '@cssfn/cssfn'; // cssfn core
import { 
// hooks:
createUseSheet, } from '@cssfn/react-cssfn'; // cssfn for react
// nodestrap utilities:
import { 
// hooks:
usePropEnabled, } from '@nodestrap/accessibilities';
// nodestrap components:
import { 
// hooks:
usePressReleaseState, 
// styles:
usesActionControlLayout, usesActionControlVariants, usesActionControlStates, } from '@nodestrap/action-control';
import { 
// styles:
usesEditableControlLayout, usesEditableControlVariants, usesEditableControlStates, EditableControl, } from '@nodestrap/editable-control';
// styles:
export const usesEditableActionControlLayout = () => {
    return style({
        ...imports([
            // layouts:
            usesEditableControlLayout(),
            usesActionControlLayout(),
        ]),
    });
};
export const usesEditableActionControlVariants = () => {
    return style({
        ...imports([
            // variants:
            usesEditableControlVariants(),
            usesActionControlVariants(),
        ]),
    });
};
export const usesEditableActionControlStates = () => {
    return style({
        ...imports([
            // states:
            usesEditableControlStates(),
            usesActionControlStates(),
        ]),
    });
};
export const useEditableActionControlSheet = createUseSheet(() => [
    mainComposition(imports([
        // layouts:
        usesEditableActionControlLayout(),
        // variants:
        usesEditableActionControlVariants(),
        // states:
        usesEditableActionControlStates(),
    ])),
], /*sheetId :*/ 'viprxwh99g'); // an unique salt for SSR support, ensures the server-side & client-side have the same generated class names
export function EditableActionControl(props) {
    // styles:
    const sheet = useEditableActionControlSheet();
    // states:
    const pressReleaseState = usePressReleaseState(props);
    // fn props:
    const propEnabled = usePropEnabled(props);
    // jsx:
    return (React.createElement(EditableControl, { ...props, 
        // classes:
        mainClass: props.mainClass ?? sheet.main, stateClasses: [...(props.stateClasses ?? []),
            pressReleaseState.class,
        ], 
        // events:
        onClick: (propEnabled || undefined) && props.onClick, onMouseDown: (e) => { props.onMouseDown?.(e); pressReleaseState.handleMouseDown(e); }, onKeyDown: (e) => { props.onKeyDown?.(e); pressReleaseState.handleKeyDown(e); }, onAnimationEnd: (e) => {
            props.onAnimationEnd?.(e);
            // states:
            pressReleaseState.handleAnimationEnd(e);
        } }));
}
export { EditableActionControl as default };
