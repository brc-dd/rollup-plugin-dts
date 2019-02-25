import React from 'react';
interface MyComponentProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    foo: string;
}
declare class MyComponent extends React.Component<MyComponentProps> {
}
export { MyComponentProps, MyComponent };
