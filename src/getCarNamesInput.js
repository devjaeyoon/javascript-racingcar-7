import { MissionUtils } from '@woowacourse/mission-utils';

function getCarNamesInput() {
  const carNamesinput = MissionUtils.Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  );

  return carNamesinput;
}

export default getCarNamesInput;
