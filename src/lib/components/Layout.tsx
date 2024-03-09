import type * as elements from 'typed-html';

type LayoutProps = {
  title?: string;
};

export const Layout = (props: LayoutProps & elements.Children) => {
  const { title = 'elysia-kickstart' } = props;
  return (
    '<!DOCTYPE html>' +
    (
      <html lang='en' class='dark'>
        <head>
          <meta charset='UTF-8' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <link
            rel='icon'
            type='image/x-icon'
            href='/public/favicon.ico'
          ></link>
          <title>{title}</title>
          <link href='/public/output.css' rel='stylesheet' />
        </head>
        <body>{props.children}</body>
      </html>
    )
  );
};