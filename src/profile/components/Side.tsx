import React from 'react';
import SideItem from './SideItem';

export default class Side extends React.Component {
    render() {
        return (
            <div className='side'>
                <SideItem title='Skills'>
                    <ul className='list'>
                        <li>Python/Java/Ruby</li>
                        <li>C/C#</li>
                        <li>Django/FastAPI</li>
                        <li>JavaScript/Typescript</li>
                        <li>React Native/React/Angular/Vue</li>
                        <li>PostgresSQL/Firebase</li>
                        <li>GitHub/BitBucket/GitLab/Jira</li>
                        <li>AWS/Azure</li>
                        <li>Docker/Kubernetes/Jenkins/Hashicrop Vault</li>
                        <li>Prometheus/Grafana/Alertmanager</li>
                    </ul>
                </SideItem>

                <SideItem title='Education'>
                    <ul className='list'>
                        <li>BE with Honours in Software Engineering</li>
                        <li>Victoria University of Wellington</li>
                        <li>2016-2019</li>
                    </ul>
                </SideItem>
            </div>
        )
    }
}