import SimpleMainBlog from '../SimpleMainBlog'
import styles from './index.module.scss'
import post1 from '../../../../assets/news/posts/post1.png'
import post2 from '../../../../assets/news/posts/post2.png'
import post3 from '../../../../assets/news/posts/post3.png'
import post4 from '../../../../assets/news/posts/post4.png'
import post5 from '../../../../assets/news/posts/post5.png'
import post6 from '../../../../assets/news/posts/post6.png'
import { Link } from 'react-router-dom'

function index() {
  return (
    <>
      <div className='col-12 col-sm-6 col-md-4 col-lg-4'>
        <Link to="blog" className={styles.link}>
          <SimpleMainBlog
            title={'More than 440,000 new cases were recorded in the US on Monday.'}
            date={'12.21.2021'}
            img={post1}
            text={'Is the progress that was made at the COP26 Glasgow climate summit already in jeopardy because of challenges in the year ahead? There had been plans to build a hotel for the Canadian Pacific Railway'}
          />
        </Link>
        <Link to="blog" className={styles.link}>
          <SimpleMainBlog
            title={'More than 440,000 new cases were recorded in the US on Monday.'}
            date={'12.21.2021'}
            img={post4}
            text={'Is the progress that was made at the COP26 Glasgow climate summit already in jeopardy because of challenges in the year ahead? There had been plans to build a hotel for the Canadian Pacific Railway'}
          />
        </Link>
      </div>
      <div className='col-12 col-sm-6 col-md-4 col-lg-4'>
        <Link to="blog" className={styles.link}>
          <SimpleMainBlog
            title={'More than 440,000 new cases were recorded in the US on Monday.'}
            date={'12.21.2021'}
            img={post2}
            text={'Is the progress that was made at the COP26 Glasgow climate summit already in jeopardy because of challenges in the year ahead? There had been plans to build a hotel for the Canadian Pacific Railway'}
            />
        </Link>
        <Link to="blog" className={styles.link}>
          <SimpleMainBlog
            title={'More than 440,000 new cases were recorded in the US on Monday.'}
            date={'12.21.2021'}
            img={post5}
            text={'Is the progress that was made at the COP26 Glasgow climate summit already in jeopardy because of challenges in the year ahead? There had been plans to build a hotel for the Canadian Pacific Railway'}
          />
        </Link>
      </div>
      <div className='col-12 col-sm-6 col-md-4 col-lg-4'>
        <Link to="blog" className={styles.link}>
          <SimpleMainBlog
            title={'More than 440,000 new cases were recorded in the US on Monday.'}
            date={'12.21.2021'}
            img={post3}
            text={'Is the progress that was made at the COP26 Glasgow climate summit already in jeopardy because of challenges in the year ahead? There had been plans to build a hotel for the Canadian Pacific Railway'}
          />
        </Link>
        <Link to="blog" className={styles.link}>
          <SimpleMainBlog
            title={'More than 440,000 new cases were recorded in the US on Monday.'}
            date={'12.21.2021'}
            img={post6}
            text={'Is the progress that was made at the COP26 Glasgow climate summit already in jeopardy because of challenges in the year ahead? There had been plans to build a hotel for the Canadian Pacific Railway'}
          />
        </Link>
      </div>
    </>
  )
}

export default index
