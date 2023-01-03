var parameters = {};
var target = {};
target.opportunityid = "FC446033-0911-EA11-A811-000D3AB4DE89"; //Delete if creating new record 
target["@odata.type"] = "Microsoft.Dynamics.CRM.opportunity";
parameters.Target = target;

var retrieveRecordChangeHistoryRequest = {
    Target: parameters.Target,

    getMetadata: function() {
        return {
            boundParameter: null,
            parameterTypes: {
                "Target": {
                    "typeName": "mscrm.crmbaseentity",
                    "structuralProperty": 5
                }
            },
            operationType: 1,
            operationName: "RetrieveRecordChangeHistory"
        };
    }
};

Xrm.WebApi.online.execute(retrieveRecordChangeHistoryRequest).then(
    function success(result) {
        if (result.ok) {
            var results = JSON.parse(result.responseText);
            console.log(results);
        }
    },
    function(error) {
        Xrm.Utility.alertDialog(error.message);
    }
);
