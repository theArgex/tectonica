import {
    Flex,
    Text,
    Stack,
    Icon,
    useBreakpointValue,
    SimpleGrid,
    Heading,
    Spinner
} from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import { ReactElement, useEffect } from 'react';
import { NavBar } from '@sections/NavBar';
import Footer from '@sections/Footer';
import PageTitle from '@components/PageTitle';
import { MotionConfig, motion, useAnimation } from "framer-motion";
import SectionLanding from '@components/SectionLanding';
import { isMobile } from 'react-device-detect';
import Background from '@components/Background';

interface FeatureProps {
    title: string;
    icon: ReactElement;
}

const Feature = ({ title, icon }: FeatureProps) => {
    return (
        <Stack>
            <Flex
                w={16}
                h={16}
                align={'center'}
                justify={'center'}
                color={'white'}
                rounded={'full'}
                bg={'gray.100'}
                mb={1}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{title}</Text>
        </Stack>
    );
};

const LandingPage = () => {
    let page = 1;
    const animationLoading = useAnimation();
    const animation1 = useAnimation();
    const animation2 = useAnimation();
    const animation3 = useAnimation();
    const animation4 = useAnimation();
    if (!isMobile) {
        animation1.start({ opacity: 1 });
        animation2.start({ opacity: 0 });
        animation3.start({ opacity: 0 });
        animation4.start({ opacity: 0 });
    }
    const handleScroll = (e) => {
        if (e.deltaY > 0) {
            if (page == 1) {
                animation1.start({
                    opacity: 0
                });
                animation2.start({
                    opacity: 1
                });
                page++;
            } else if (page == 2) {
                animation2.start({
                    opacity: 0
                });
                animation3.start({
                    opacity: 1
                });
                page++;
            } else if (page == 3) {
                animation3.start({
                    opacity: 0
                });
                animation4.start({
                    opacity: 1
                });
                page++;
            }
        }
        if (e.deltaY < 0) {
            if (page == 2) {
                animation1.start({
                    opacity: 1
                })
                animation2.start({
                    opacity: 0
                })
                page--;
            } else if (page == 3) {
                animation2.start({
                    opacity: 1
                })
                animation3.start({
                    opacity: 0
                })
                page--;
            } else if (page == 4) {
                animation3.start({
                    opacity: 1
                })
                animation4.start({
                    opacity: 0
                })
                page--;
            }
        }
    };
    useEffect(() => {
        animationLoading.start({
            opacity: 0
        })
        window.addEventListener("wheel", handleScroll);
        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, []);
    return (
        <>
            <PageTitle title={"tectonica | Baurealisationen"} />
            <motion.div animate={animationLoading} transition={{ delay: 0.5 }} >
                <Flex position={"fixed"} w={"100vw"} h={"100vh"} backgroundColor={"black"} justify={'center'} align={'center'} zIndex={10} flexDirection={"column"}>
                    <Heading pb="10vh">tectonica</Heading>
                    <Spinner size={"xl"} />
                </Flex>
            </motion.div>
            <Flex flexDirection="column">
                <NavBar />
                <SectionLanding animation={animation1} image='https://unsplash.com/photos/h2yOqTOFu1w/download?ixid=MnwxMjA3fDB8MXx0b3BpY3x8TThqVmJMYlRSd3N8fHx8fDJ8fDE2NjkwNTgxOTk&force=true'>
                    <Text
                        color={'white'}
                        fontWeight={700}
                        lineHeight={1.2}
                        fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                        eiusmod tempor
                    </Text>
                </SectionLanding>
                <SectionLanding animation={animation2} image='https://unsplash.com/photos/Mzm6gC4tdak/download?ixid=MnwxMjA3fDB8MXx0b3BpY3x8TThqVmJMYlRSd3N8fHx8fDJ8fDE2NjkwNTgxOTk&force=true'>
                    <Text
                        color={'white'}
                        fontWeight={700}
                        lineHeight={1.2}
                        fontSize="xl">
                        Vorstellung
                    </Text>
                </SectionLanding>
                <SectionLanding animation={animation3} image='https://unsplash.com/photos/ozAUtewYULI/download?ixid=MnwxMjA3fDB8MXx0b3BpY3x8TThqVmJMYlRSd3N8fHx8fDJ8fDE2NjkwNTgzMjg&force=true'>
                    <Text
                        color={'white'}
                        fontWeight={700}
                        lineHeight={1.2}
                        fontSize="xl">
                        Philosophie
                    </Text>
                </SectionLanding>
                <SectionLanding animation={animation4} image='https://unsplash.com/photos/BeOEIEw1WOk/download?ixid=MnwxMjA3fDB8MXx0b3BpY3x8TThqVmJMYlRSd3N8fHx8fDJ8fDE2NjkwNTg2OTY&force=true'>
                    <Text
                        color={'white'}
                        fontWeight={700}
                        lineHeight={1.2}
                        fontSize="xl">
                        Vision
                    </Text>
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                        <Feature
                            icon={<Icon as={FcAssistant} w={10} h={10} />}
                            title={'Augenhöhe (Rhigetti Partner)'}
                        />
                        <Feature
                            icon={<Icon as={FcDonate} w={10} h={10} />}
                            title={'Denken auch ausserhalb des normalen Rahmens'}
                        />
                        <Feature
                            icon={<Icon as={FcInTransit} w={10} h={10} />}
                            title={'Den Ernst in die Sache investieren nicht in die Person'}
                        />
                    </SimpleGrid>
                </SectionLanding>
                <Footer />
            </Flex>
        </>
    );
}

export default LandingPage;