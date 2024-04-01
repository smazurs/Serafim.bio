import { FunctionComponent } from 'react';
import { Icon } from '@iconify/react';
import javaIcon from '@iconify/icons-logos/java';
import pythonIcon from '@iconify/icons-logos/python';
import cPlusplus from '@iconify/icons-logos/c-plusplus';
// import reactIcon from '@iconify/icons-logos/react';
import { SharedBasicInfo, BasicInfo } from '.';

type Props = {
    sharedBasicInfo?: SharedBasicInfo;
    resumeBasicInfo?: BasicInfo;
};
export const About: FunctionComponent<Props> = (props) => {
    const { sharedBasicInfo, resumeBasicInfo } = props;
    const profilepic = sharedBasicInfo ? sharedBasicInfo.image : '';
    let sectionName = '';
    let hello = '';
    let about = '';
    if (resumeBasicInfo) {
        sectionName = resumeBasicInfo.section_name.about;
        hello = resumeBasicInfo.description_header;
        about = resumeBasicInfo.description;
    }
    function formatParagraphs(text: string): JSX.Element[] {
        const linkText = "Make sure to check out my LinkedIn profile!";
        const linkURL = "https://www.linkedin.com/in/serafimmazurs/";

        return text.split('\n\n').map((para, index) => {
            if (para.includes(linkText)) {
                const parts = para.split(linkText);
                return (
                    <span key={index}>
                    {parts[0]}
                        <a
                            href={linkURL}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'underline', fontWeight: 'bold', color: 'white' }}                        >
                        {linkText}
                    </a>
                        {parts[1]}
                        <br /><br />
                </span>
                );
            } else {
                return (
                    <span key={index}>
                    {para}
                        <br /><br />
                </span>
                );
            }
        });
    }


    return (
        <section id='about'>
            <div className='col-md-12'>
                <h1 style={{ color: 'black' }}>
                    <span>{sectionName}</span>
                </h1>
                <div className='row center mx-auto mb-5'>
                    <div className='col-md-4 mb-5 center'>
                        <div className='polaroid'>
                            <span style={{ cursor: 'auto' }}>
                                <img height='250px' src={profilepic} alt='Avatar placeholder' />
                                <Icon icon={javaIcon} style={{ fontSize: '400%', margin: '9% 5% 0 5%' }} />
                                <Icon icon={cPlusplus} style={{ fontSize: '400%', margin: '9% 5% 0 5%' }} />
                                {/*<Icon icon={reactIcon} style={{ fontSize: '400%', margin: '9% 5% 0 5%' }} />*/}
                                <Icon icon={pythonIcon} style={{ fontSize: '400%', margin: '9% 5% 0 5%' }} />
                            </span>
                        </div>
                    </div>
                    <div className='col-md-8 center'>
                        <div className='col-md-10'>
                            <div className='card'>
                                <div className='card-header'>
                                    <span className='iconify' data-icon='emojione:red-circle' data-inline='false' /> &nbsp;{' '}
                                    <span className='iconify' data-icon='twemoji:yellow-circle' data-inline='false' /> &nbsp;{' '}
                                    <span className='iconify' data-icon='twemoji:green-circle' data-inline='false' />
                                </div>
                                <div
                                    className='card-body font-trebuchet text-justify ml-3 mr-3'
                                    style={{
                                        height: 'auto',
                                        fontSize: '132%',
                                        lineHeight: '200%'
                                    }}>
                                    <br />
                                    <span className='wave'>{hello} :) </span>
                                    <br />
                                    <br />
                                    {formatParagraphs(about)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
