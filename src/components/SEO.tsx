import React, { memo } from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export interface SEOProps {
    description?: string;
    lang?: string;
    meta?: any[];
    title: string | string[];
}

function join(titleComponents: string[]) {
    return titleComponents.join(" | ");
}

export const SEO = memo(function SEO({
    title,
    description = "",
    lang = "en",
    meta = []
}: SEOProps) {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `
    );

    const titleArray = Array.isArray(title) ? title : [title];
    const titleString = join(titleArray);
    const fullTitleString = join([...titleArray, site.siteMetadata.title]);

    const metaDescription = description || site.siteMetadata.description;

    return (
        <Helmet
            htmlAttributes={{
                lang
            }}
            title={fullTitleString}
            meta={[
                {
                    name: "description",
                    content: metaDescription
                },
                {
                    property: "og:title",
                    content: titleString
                },
                {
                    property: "og:description",
                    content: metaDescription
                },
                {
                    property: `og:type`,
                    content: `website`
                },
                {
                    name: `twitter:card`,
                    content: `summary`
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.author
                },
                {
                    name: `twitter:title`,
                    content: titleString
                },
                {
                    name: `twitter:description`,
                    content: metaDescription
                }
            ].concat(meta)}
        />
    );
});
