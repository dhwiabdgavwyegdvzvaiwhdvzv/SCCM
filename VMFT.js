//⚠️ Author Tag Included Below , Dont Try To Edit ⚠️
//Allright Reserved BiguuDev 2025 - 2026 

const AUTHOR = "BiguuDev";
if (AUTHOR !== "BiguuDev") $done({});

const body = {
  "meta": {
    "code": 0,
    "msg": "",
    "error": "",
    "request_uri": "/subscribe/free_trial.json",
    "reqid": "3ec69bc5-a6e8-4da2-b2b0-323baa12fc67"
  },
  "response": {
    "list": [
      {
        "act_id": 130,
        "permission_id": "SP0270",
        "type": 3,
        "membership_status": 0,
        "membership_level": 0,
        "consume_event": 0,
        "allow_consume": 0,
        "allow_consume_total_num": 0,
        "rollback_at": 3,
        "delay_rollback_time": 0,
        "end_at": 0,
        "strategy_type": 1,
        "remain": 0,
        "remain_time": 0,
        "limit_time": 2,
        "sub_center_function_code": "ai_super_definition_video_new",
        "meidou_biz_type": "",
        "consume_type": 1,
        "free_trial_type": 2,
        "need_login": false,
        "bind_uid": false,
        "price_type": 1,
        "product_price": 60,
        "message": [
          {
            "type": 1,
            "content": "Free trial 1 time remaining"
          },
          {
            "type": 1,
            "content": "Free trial 1 time remaining"
          },
          {
            "type": 2,
            "content": ""
          },
          {
            "type": 3,
            "content": ""
          }
        ],
        "dialog_list": [
          {
            "type": 0,
            "title": "",
            "content": ""
          }
        ],
        "show_vip_banner": 0,
        "consume_account_type": 2,
        "win_msg": {}
      }
    ]
  }
};

$done({
  body: JSON.stringify(body)
});