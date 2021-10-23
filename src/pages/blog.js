import React from 'react';
import {
  BlogCard,
  GridContainer,
  HeaderThree,
} from '../components/Projects/ProjectsStyles';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

function Blog() {
  return (
    <Layout>
      <Section grid>
        <h2>Blogs will be posted soon</h2>
        <GridContainer>
          <BlogCard>
            <HeaderThree title='Post'>Async & Defer</HeaderThree>
            <p>Posted At : October 19 2021</p>
            {/* <ExternalLinks href={'https://thilakmanib.hashnode.dev/async-and-defer-in-javascript'}>Read More</ExternalLinks> */}
          </BlogCard>
        </GridContainer>
      </Section>
    </Layout>
  );
}

export default Blog;
