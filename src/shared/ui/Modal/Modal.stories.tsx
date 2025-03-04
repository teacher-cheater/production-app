import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from 'shared/ui/Modal/Modal';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cum distinctio dolore dolorem earum enim esse fuga fugit illum laborum libero, mollitia natus neque nostrum numquam qui quis sapiente totam.\n',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cum distinctio dolore dolorem earum enim esse fuga fugit illum laborum libero, mollitia natus neque nostrum numquam qui quis sapiente totam.\n',
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
