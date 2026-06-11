//⚠️ Author Tag Included Below , Dont Try To Edit ⚠️
//Allright Reserved BiguuDev 2025 - 2026 

const AUTHOR = "BiguuDev";
if (AUTHOR !== "BiguuDev") $done({});

const body = {
  "meta": {
    "code": 0,
    "msg": "",
    "error": "",
    "request_uri": "/vg/subscribe/free_trial_ack.json",
    "reqid": "addf64fd-d067-4c40-9c58-98036725285d"
  },
  "response": {
    "consume_info": {
      "id": 0,
      "act_id": 130,
      "permission_id": "SP0270",
      "order_id": "7465883118096895624",
      "consume_count": 0,
      "consume_free_count": 0,
      "consume_money": 0,
      "money_type": 0,
      "type": 0,
      "remain_count": 0,
      "event": 3,
      "status": 1
    }
  }
};

$done({
  body: JSON.stringify(body)
});