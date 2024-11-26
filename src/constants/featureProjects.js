import NestSeekerLogo from '@/assets/images/logos/logo_nestseeker.svg'
import OnTheJobTrackerLogo from '@/assets/images/logos/Logo_OJT.svg'
import CosmosCoffeeLogo from '@/assets/images/logos/logo_cosmos.svg'
import { Coffee } from 'lucide-react'

const FeaturedProjects = [
    {
        id: 1,
        title: 'NestSeeker',
        description: 'NestSeeker is an apartment finder that allows users to search for apartments and houses for rent.',
        image: NestSeekerLogo,
    },
    {
        id: 2,
        title: 'OnTheJob Tracker',
        description: 'OJT-Management for School Coordinators and Training Agencies.',
        image: OnTheJobTrackerLogo,
    },
    {
        id: 3,
        title: 'Cosmos Coffee Shop',
        description: 'A simple coffee shop website that allows users to view the menu and order coffee.',
        image: CosmosCoffeeLogo,
    }
]

export default FeaturedProjects