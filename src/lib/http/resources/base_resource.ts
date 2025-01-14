// import moment from 'moment';

interface IBaseResource {
  data?: any;
  message?: string;
  timestamp?: string;
  status?: number;
  isSuccess?: boolean;
}

class BaseResource {
  static exec(data: IBaseResource): IBaseResource {
    return {
      data: data.data,
      status: data.status,
      // timestamp: moment().utc().format('YYYY-MM-DDTHH:mm:ssZZ'),
    };
  }
}

export {IBaseResource, BaseResource};
