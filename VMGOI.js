const AUTHOR = "BiguuDev";
if (AUTHOR !== "BiguuDev") $done({});

const obj = {
  "meta": {
    "code": 0,
    "msg": "",
    "error": "",
    "request_uri": "/vg/subscribe/get_order_info.json",
    "reqid": "c78b19fc-4ab3-4596-8d68-46fc5c55d93c"
  },
  "response": {
    "free_trail_info": {
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
      "permission_info": {
        "id": "SP0270",
        "type": 49,
        "type_show_name": "Quality Restoration",
        "type_icon": "",
        "name": "画质修复-AI超清-视频",
        "desc": "画质修复-AI超清-视频",
        "is_func": false,
        "target": "ai_super_definition_video",
        "sale_type": 0,
        "membership_levels": null,
        "full_member": 0,
        "subscription_biz_code": "",
        "full_member_biz_code": "",
        "language_data": {
          "name": "画质修复-AI超清-视频",
          "desc": "画质修复-AI超清-视频",
          "dialog_title": "",
          "dialog_content": "",
          "dialog_ok": "",
          "dialog_cancel": ""
        }
      },
      "show_vip_banner": 0,
      "consume_account_type": 2,
      "win_msg": {}
    },
    "consume_info": {
      "id": 2916722,
      "act_id": 130,
      "permission_id": "SP0270",
      "order_id": "7465883118096895624",
      "consume_count": 2,
      "consume_free_count": 0,
      "consume_money": 0,
      "money_type": 0,
      "type": 0,
      "remain_count": 0,
      "event": 0,
      "status": 4
    }
  }
};

let headers = $response.headers || {};

delete headers["Content-Encoding"];
delete headers["content-encoding"];
delete headers["Content-Length"];
delete headers["content-length"];

headers["Content-Type"] = "application/json; charset=utf-8";
headers["content-type"] = "application/json; charset=utf-8";

$done({
  headers,
  body: JSON.stringify(obj)
});