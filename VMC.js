//⚠️ Author Tag Included Below , Dont Try To Edit ⚠️
//Allright Reserved BiguuDev 2025 - 2026 

const AUTHOR = "BiguuDev";
if (AUTHOR !== "BiguuDev") $done({});

const body = {
  "meta": {
    "code": 0,
    "msg": "",
    "error": "",
    "request_uri": "/vg/subscribe/consume.json",
    "reqid": "7502d1ef-49c8-4321-8b83-c904ea8fbfff"
  },
  "response": {
    "consume_info": {
      "id": 130,
      "act_id": 130,
      "permission_id": "SP0270",
      "order_id": "7465883118096895624",
      "consume_count": 3,
      "consume_free_count": 0,
      "consume_money": 0,
      "money_type": 3,
      "type": 0,
      "remain_count": 0,
      "event": 1,
      "status": 0
    }
  }
};

$done({
  body: JSON.stringify(body)
});