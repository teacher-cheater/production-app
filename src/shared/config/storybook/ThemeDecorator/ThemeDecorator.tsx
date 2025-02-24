import {Story} from "@storybook/react";
import {Theme} from "app/providers/ThemeProvider";

export const ThemeDecorator = (theme: Theme) => {
    const DecoratedComponent = (StoryComponent: Story) => (
        <div className={`app ${theme}`}>
            <StoryComponent/>
        </div>
    );
    DecoratedComponent.displayName = `ThemeDecorator(${theme})`;
    return DecoratedComponent;
};
