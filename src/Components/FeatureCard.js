import React from 'react';
import FeatureCard from './FeatureCard';

// Sample images, replace with your actual image paths
import onlineTeachingImage from './Assets/online-teaching.png';
import liveClassesImage from './Assets/live-classes.png';
import trainedTeachersImage from './Assets/trained-teachers.png';
import visualConceptsImage from './Assets/visual-concepts.png';
import gamifiedCourseImage from './Assets/gamified-course.png';

const FeaturesSection = () => {
    const features = [
        {
            image: onlineTeachingImage,
            title: 'Online Teaching',
            description: 'With online learning programs, parents can teach their kids anytime and anywhere.',
        },
        {
            image: liveClassesImage,
            title: 'Live Classes',
            description: 'Although live class ideas are already prevalent and established in the education business.',
        },
        {
            image: trainedTeachersImage,
            title: 'Trained Teachers',
            description: 'Teaching is a passion and experts want to share their expertise outside of the institutional sphere.',
        },
        {
            image: visualConceptsImage,
            title: 'Visual Concepts',
            description: 'Learning by watching videos is better than reading long pages and bulky books.',
        },
        {
            image: gamifiedCourseImage,
            title: 'Gamified Course',
            description: 'Gamification immerses the students into the subject matter.',
        },
        {
            image: trainedTeachersImage,
            title: 'Trained Teachers',
            description: 'Teaching is a passion and experts want to share their expertise outside of the institutional sphere.',
        },
    ];

    return (
        <div className="features-section">
            {features.map((feature, index) => (
                <FeatureCard 
                    key={index}
                    image={feature.image}
                    title={feature.title}
                    description={feature.description}
                />
            ))}
        </div>
    );
};

export default FeaturesSection;
