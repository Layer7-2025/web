import Typo from '@/components/Typo';
import { weight } from '@/styles/fonts/values/weight';
import StatsDetailItem from './StatsDetail';
import StatsItem from './StatsItem';
import * as s from './style.css';

import { getJSON } from '@/lib/json';
import { getYearsFromNow } from '@/lib/utils/time';
import { colorVars } from '@/styles/theme.css';
import { JSONClubInfoData } from '@/types/json';

export default async function HomeStatsSection() {
  const Layer7Info = await getJSON<JSONClubInfoData>('_stats.json');

  const titleBreakpoint = {
    640: 32,
    base: 48,
  };

  return (
    <section className={s.base}>
      <div className={s.statsContainer}>
        <div>
          <Typo
            as='h2'
            size={titleBreakpoint}
            weight={weight.semibold}
            color={colorVars.normal}>
            숫자로 보는
          </Typo>
          <Typo
            as='h1'
            size={titleBreakpoint}
            weight={weight.black}
            color={colorVars.normal}>
            Layer7
          </Typo>
        </div>
        <div className={s.statsItemContainer}>
          <StatsItem
            name='탄생 연도'
            value={Layer7Info.startedYear}
            prefix='년'
          />
          <StatsItem
            name='총 수상'
            value={Layer7Info.totalAwards}
            prefix='개'
          />
          <StatsItem
            name='함께 한 부원'
            value={Layer7Info.totalMembers}
            prefix='명'
          />
        </div>
      </div>
      <div className={s.statsDetailContainer}>
        <StatsDetailItem
          order={1}
          title='동아리 역사'
          content={`Layer7은 ${Layer7Info.startedYear}년도부터 시작된 동아리로,
${getYearsFromNow(Layer7Info.startedYear)}년의 역사를 가지고 있으며`}
        />
        <StatsDetailItem
          order={2}
          title='동아리 총 수상'
          content={`${Layer7Info.totalAwards}개의 수상실적을 이루어냈으며,`}
        />
        <StatsDetailItem
          order={3}
          title='함께 한 부원'
          content={`${Layer7Info.totalMembers}명의 부원과 함께했습니다`}
        />
      </div>
    </section>
  );
}
