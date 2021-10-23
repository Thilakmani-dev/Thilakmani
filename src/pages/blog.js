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
        <h2>Here you go!</h2>
        <GridContainer>
          <BlogCard>
            <CardInfo className='card-info'>
              <h4>Async & Defer in Javascript</h4>
              <p>Posted At : October 19 2021</p>
            </CardInfo>
            {/* <ExternalLinks href={'https://thilakmanib.hashnode.dev/async-and-defer-in-javascript'}>Read More</ExternalLinks> */}
          </BlogCard>
        </GridContainer>
      </Section>
    </Layout>
  );
}

export default Blog;
