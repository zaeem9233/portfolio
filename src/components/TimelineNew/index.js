import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import CodeIcon from '@mui/icons-material/Code';
import StarIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/Home';

const index = () => {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#1C1C27', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
                date="2011 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<CodeIcon />}
                >
                <h3 className="vertical-timeline-element-title">Creative Director</h3>
                <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<StarIcon />}
            />
        </VerticalTimeline>
    )
}

export default index