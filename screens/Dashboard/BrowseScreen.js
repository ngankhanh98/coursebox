import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from '@ui-kitten/components'

import CourseThumnail from '../../components/CourseThumnail';
import SearchBar from '../../components/SearchBar';

import { LABEL } from '../../contants'
import { connect } from 'react-redux';
import { getTopRateCourse, getTopNewCourse, getTopSellCourse } from '../../selectors/course.selector';
import { loadTopRateCourse, loadTopNewCourse, loadTopSellCourse } from '../../actions/course.action';

function BrowserScreen({ topRateCourse, loadTopRateCourse, topNewCourse, loadTopNewCourse, topSellCourse, loadTopSellCourse }) {

    useEffect(() => {
        loadTopNewCourse()
        loadTopSellCourse()
        loadTopRateCourse()
    }, [])

    return (<>

        {/* <SearchBar /> */}
        <ScrollView>
            <View style={styles.container}>
                <Text category="h6" style={{ marginBottom: 20 }}>{LABEL.TOP_NEW_COURSE}</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {topNewCourse.map((course) => (<CourseThumnail key={course.id} title={course.title} description={course.description} image={course.imageUrl} />))}
                </ScrollView>
            </View>
            <View style={styles.container}>
                <Text category="h6" style={{ marginBottom: 20 }}>{LABEL.TOP_SELL_COURSE}</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {topSellCourse.map((course) => (<CourseThumnail key={course.id} title={course.title} description={course.description} image={course.imageUrl} />))}

                </ScrollView>
            </View>
            <View style={styles.container}>
                <Text category="h6" style={{ marginBottom: 20 }}>{LABEL.TOP_RATE_COURSE}</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {topRateCourse.map((course) => (<CourseThumnail key={course.id} title={course.title} description={course.description} image={course.imageUrl} />))}
                </ScrollView>
            </View>
        </ScrollView>
    </>
    );
}


const styles = StyleSheet.create({
    container: {
        padding: 20
    },
})
const mapStateToProps = (state) => {
    topRateCourse = getTopRateCourse(state)
    topNewCourse = getTopNewCourse(state)
    topSellCourse = getTopSellCourse(state)
    return { topRateCourse, topNewCourse, topSellCourse }
}

export default connect(mapStateToProps, { loadTopRateCourse, loadTopNewCourse, loadTopSellCourse })(BrowserScreen)