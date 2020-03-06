import { AlipayCircleOutlined, TaobaoCircleOutlined, WeiboCircleOutlined } from '@ant-design/icons';
import { Alert, Checkbox } from 'antd';
import React, { useState } from 'react';
import { Dispatch, AnyAction } from 'redux';
import { Link } from 'umi';
import { connect } from 'dva';
import { StateType } from '@/models/login';
import { LoginParamsType } from '@/services/login';
import { ConnectState } from '@/models/connect';
import LoginFrom from './components/Login';

import styles from './style.less';

const { Tab, UserName, Password, Mobile, Captcha, Submit } = LoginFrom;
interface LoginProps {
  dispatch: Dispatch<AnyAction>;
  userLogin: StateType;
  submitting?: boolean;
}

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const Login: React.FC<LoginProps> = props => {
  const { userLogin = {}, submitting } = props;
  const { status, type: loginType } = userLogin;
  const [autoLogin, setAutoLogin] = useState(true);
  const [type, setType] = useState<string>('account');

  const handleSubmit = (values: LoginParamsType) => {
    const { dispatch } = props;
    dispatch({
      type: 'login/login',
      payload: { ...values, type },
    });
  };
  return (
    <div className={styles.main}>
      <LoginFrom activeKey={type} onTabChange={setType} onSubmit={handleSubmit}>
        <Tab key="account" tab="Account password login">
          {status === 'error' && loginType === 'account' && !submitting && (
            <LoginMessage content="Account or password error（admin/ant.design）" />
          )}

          <UserName
            name="userName"
            placeholder="username: admin or user"
            rules={[
              {
                required: true,
                message: 'please enter user name!',
              },
            ]}
          />
          <Password
            name="password"
            placeholder="password: ant.design"
            rules={[
              {
                required: true,
                message: 'Please enter the password!',
              },
            ]}
          />
        </Tab>
        <Tab key="mobile" tab="Mobile number login">
          {status === 'error' && loginType === 'mobile' && !submitting && (
            <LoginMessage content="Verification code error" />
          )}
          <Mobile
            name="mobile"
            placeholder="phone number"
            rules={[
              {
                required: true,
                message: 'Please enter phone number！',
              },
              {
                pattern: /^1\d{10}$/,
                message: 'Malformed phone number！',
              },
            ]}
          />
          <Captcha
            name="captcha"
            placeholder="Verification code"
            countDown={120}
            getCaptchaButtonText=""
            getCaptchaSecondText="second"
            rules={[
              {
                required: true,
                message: 'please enter verification code！',
              },
            ]}
          />
        </Tab>
        <div>
          <Checkbox checked={autoLogin} onChange={e => setAutoLogin(e.target.checked)}>
            auto login
          </Checkbox>
          <a
            style={{
              float: 'right',
            }}
          >
            forget password
          </a>
        </div>
        <Submit loading={submitting}>log in</Submit>
        <div className={styles.other}>

        </div>
      </LoginFrom>
    </div>
  );
};

export default connect(({ login, loading }: ConnectState) => ({
  userLogin: login,
  submitting: loading.effects['login/login'],
}))(Login);
