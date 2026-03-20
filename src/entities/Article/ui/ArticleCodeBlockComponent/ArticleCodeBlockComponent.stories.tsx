import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';

export default {
    title: 'shared/ArticleCodeBlockComponent ',
    component: ArticleCodeBlockComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleCodeBlockComponent>;

const Template: ComponentStory<typeof ArticleCodeBlockComponent> = (args) => <ArticleCodeBlockComponent {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
