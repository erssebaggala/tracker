


export interface TrackModelStateType {
  currentUser?: CurrentUser;
}

export interface TrackerModelType {
  namespace: 'tracker';
  state: TrackModelStateType;
  reducers: {
    updatePath: Reducer<TrackModelStateType>;
  };
}

const TrackerModel: TrackerModelType = {
  namespace: 'tracker',

  state: {
    currentUser: {},
  },
  
  reducers: {
	  updatePath(state, action) {
		  return {
			  ...state,
			  paths: action.payload
		  }
	  }
  }
}


export default TrackerModel