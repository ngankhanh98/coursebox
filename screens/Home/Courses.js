import React from 'react'
import PropTypes from 'prop-types'
import CourseThumnail from '../../components/CourseThumnail'

function Courses(props) {
    return (
        <>
            <CourseThumnail teacher="Ngan Khanh" title="Adobe Effect" description="The Maldives, officially the Republic of Maldives, is a small country in South Asia, located in the Arabian Sea
        of the Indian Ocean. It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian
        continent" />
            <CourseThumnail teacher="Ngan Khanh" title="Adobe Effect" description="The Maldives, officially the Republic of Maldives, is a small country in South Asia, located in the Arabian Sea
        of the Indian Ocean. It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian
        continent" />
            <CourseThumnail teacher="Ngan Khanh" title="Adobe Effect" description="The Maldives, officially the Republic of Maldives, is a small country in South Asia, located in the Arabian Sea
        of the Indian Ocean. It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian
        continent" />
        </>
    )
}

Courses.propTypes = {

}

export default Courses

