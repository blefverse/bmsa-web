import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Breaking the Limits',
    Svg: require('../../static/img/logo.svg').default,
    description: (
      <>
        Blefonix RolePlay breaks standards and limits.
        That's why these docs were created, to deal with our world.
      </>
    ),
  },
  {
    title: 'Breaking the Limits',
    Svg: require('../../static/img/logo.svg').default,
    description: (
      <>
        Blefonix RolePlay breaks standards and limits.
        That's why these docs were created, to deal with our world.
      </>
    ),
  },
  {
    title: 'Breaking the Limits',
    Svg: require('../../static/img/logo.svg').default,
    description: (
      <>
        Blefonix RolePlay breaks standards and limits.
        That's why these docs were created, to deal with our world.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
