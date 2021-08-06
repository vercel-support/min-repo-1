import { objectType } from 'nexus'

export const FinancialAccount = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'FinancialAccount',
  definition(t) {
    t.string('id')
    t.nullable.string('accountNumber')
    t.nullable.string('address1')
    t.nullable.string('address2')
    t.nullable.field('applicationDate', { type: 'DateTime' })
    t.nullable.int('apy')
    t.nullable.int('assetRebalance')
    t.nullable.int('availableCredit')
    t.nullable.int('averageBalance')
    t.nullable.int('balance')
    t.nullable.int('balanceLastStatement')
    t.nullable.field('bookedDate', { type: 'DateTime' })
    t.nullable.int('cashBalance')
    t.nullable.int('cashLimit')
    t.nullable.int('financialAccountChargesAndFees')
    t.nullable.string('city')
    t.nullable.field('closureReason', {
      type: 'ClosureReason',
      resolve(root: any) {
        return root.closureReason
      },
    })
    t.nullable.string('closureReasonId')
    t.nullable.string('collateralDesc')
    t.nullable.string('country')
    t.nullable.field('createdBy', {
      type: 'User',
      resolve(root: any) {
        return root.createdBy
      },
    })
    t.nullable.string('createdById')
    t.nullable.boolean('createdByMe')
    t.nullable.int('currentPostedBalance')
    t.nullable.int('dailyWithdrawalLimit')
    t.nullable.field('closeDate', { type: 'DateTime' })
    t.nullable.field('openDate', { type: 'DateTime' })
    t.nullable.string('description')
    t.nullable.string('discretionary')
    t.nullable.int('drawPeriodMonths')
    t.nullable.int('escrowBalance')
    t.nullable.field('expectedCloseDate', { type: 'DateTime' })
    t.nullable.string('name')
    t.nullable.string('hardwareSerial')
    t.nullable.boolean('heldAway')
    t.nullable.field('household', {
      type: 'Account',
      resolve(root: any) {
        return root.household
      },
    })
    t.nullable.string('householdId')
    t.nullable.int('incomingVolume')
    t.nullable.string('insurancePolicy')
    t.nullable.int('insuredAmount')
    t.nullable.string('interestRate')
    t.nullable.field('investmentObjectives', {
      type: 'InvestmentObjectives',
      resolve(root: any) {
        return root.investmentObjectives
      },
    })
    t.nullable.string('investmentObjectivesId')
    t.nullable.field('jointOwner', {
      type: 'Account',
      resolve(root: any) {
        return root.jointOwner
      },
    })
    t.nullable.string('jointOwnerId')
    t.nullable.field('lastModifiedBy', {
      type: 'User',
      resolve(root: any) {
        return root.lastModifiedBy
      },
    })
    t.nullable.string('lastModifiedById')
    t.nullable.field('lastTransactionDate', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
    t.nullable.string('lienHolder')
    t.nullable.int('loanAmount')
    t.nullable.field('loanEndDate', { type: 'DateTime' })
    t.nullable.int('loanTermMonths')
    t.nullable.boolean('managed')
    t.nullable.int('minimumBalance')
    t.nullable.int('minimumPayment')
    t.nullable.field('modelPortfolio', {
      type: 'ModelPortfolio',
      resolve(root: any) {
        return root.modelPortfolio
      },
    })
    t.nullable.string('modelPortfolioId')
    t.nullable.field('nextStatementDate', { type: 'DateTime' })
    t.nullable.string('nickname')
    t.nullable.int('holdingCount')
    t.nullable.int('outgoingVolume')
    t.nullable.boolean('overdraftProtection')
    t.nullable.field('overdraftLinkedAccount', {
      type: 'Account',
      resolve(root: any) {
        return root.overdraftLinkedAccount
      },
    })
    t.nullable.string('overdraftLinkedAccountId')
    t.nullable.boolean('overdraftAllowed')
    t.nullable.field('owner', {
      type: 'User',
      resolve(root: any) {
        return root.owner
      },
    })
    t.nullable.string('ownerId')
    t.nullable.field('ownership', {
      type: 'OwnershipType',
      resolve(root: any) {
        return root.ownership
      },
    })
    t.nullable.string('ownershipId')
    t.nullable.boolean('paperlessDelivery')
    t.nullable.int('paymentAmount')
    t.nullable.field('paymentDueDate', { type: 'DateTime' })
    t.nullable.string('paymentFrequency')
    t.nullable.int('pendingDeposits')
    t.nullable.int('pendingWithdrawals')
    t.nullable.int('performance1Yr')
    t.nullable.int('performance3Yr')
    t.nullable.int('performanceMTD')
    t.nullable.int('performanceQTD')
    t.nullable.int('performanceYTD')
    t.nullable.int('policyTerm')
    t.nullable.string('postalCode')
    t.nullable.int('premium')
    t.nullable.field('primaryOwner', {
      type: 'Account',
      resolve(root: any) {
        return root.primaryOwner
      },
    })
    t.nullable.string('primaryOwnerId')
    t.nullable.int('principalBalance')
    t.nullable.string('productName')
    t.nullable.field('rebalanceFrequency', {
      type: 'Frequency',
      resolve(root: any) {
        return root.rebalanceFrequency
      },
    })
    t.nullable.string('rebalanceFrequencyId')
    t.nullable.string('recordTypeName')
    t.nullable.field('recordType', {
      type: 'FinancialRecordType',
      resolve(root: any) {
        return root.recordType
      },
    })
    t.nullable.string('recordTypeId')
    t.nullable.field('renewalDate', { type: 'DateTime' })
    t.nullable.int('repaymentPeriodMonths')
    t.nullable.string('routingNumber')
    t.nullable.field('serviceType', {
      type: 'ServiceType',
      resolve(root: any) {
        return root.serviceType
      },
    })
    t.nullable.string('serviceTypeId')
    t.nullable.field('stage', {
      type: 'Stage',
      resolve(root: any) {
        return root.stage
      },
    })
    t.nullable.string('stageId')
    t.nullable.field('statementFrequency', {
      type: 'Frequency',
      resolve(root: any) {
        return root.statementFrequency
      },
    })
    t.nullable.string('statementFrequencyId')
    t.nullable.field('status', {
      type: 'Status',
      resolve(root: any) {
        return root.status
      },
    })
    t.nullable.string('statusId')
    t.nullable.int('targetLimit')
    t.nullable.string('taxID')
    t.nullable.field('taxStatus', {
      type: 'TaxStatus',
      resolve(root: any) {
        return root.taxStatus
      },
    })
    t.nullable.string('taxStatusId')
    t.nullable.field('timeHorizon', {
      type: 'TimeHorizon',
      resolve(root: any) {
        return root.timeHorizon
      },
    })
    t.nullable.string('timeHorizonId')
    t.nullable.int('totalCreditLimit')
    t.nullable.field('financialAccountRole', {
      type: 'FinancialAccountRole',
      resolve(root: any) {
        return root.financialAccountRole
      },
    })
    t.nullable.string('financialAccountRoleId')
    t.nullable.field('financialAccountType', {
      type: 'FinancialAccountType',
      resolve(root: any) {
        return root.financialAccountType
      },
    })
    t.nullable.string('financialAccountTypeId')
    t.nullable.field('financialHolding', {
      type: 'FinancialHolding',
      resolve(root: any) {
        return root.financialHolding
      },
    })
    t.nullable.string('financialHoldingId')
    t.nullable.field('assetsAndLiabilities', {
      type: 'AssetsAndLiabilities',
      resolve(root: any) {
        return root.assetsAndLiabilities
      },
    })
    t.nullable.string('assetsAndLiabilitiesId')
    t.nullable.field('opportunity', {
      type: 'Opportunity',
      resolve(root: any) {
        return root.opportunity
      },
    })
    t.nullable.string('opportunityId')
    t.list.field('OpportunityFinancialAccount', {
      type: 'Opportunity',
      args: {
        where: 'OpportunityWhereInput',
        orderBy: 'OpportunityOrderByInput',
        cursor: 'OpportunityWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'OpportunityScalarFieldEnum',
      },
      resolve(root: any) {
        return root.OpportunityFinancialAccount
      },
    })
    t.list.field('AssetsAndLiabilitiesFinancialAccount', {
      type: 'AssetsAndLiabilities',
      args: {
        where: 'AssetsAndLiabilitiesWhereInput',
        orderBy: 'AssetsAndLiabilitiesOrderByInput',
        cursor: 'AssetsAndLiabilitiesWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'AssetsAndLiabilitiesScalarFieldEnum',
      },
      resolve(root: any) {
        return root.AssetsAndLiabilitiesFinancialAccount
      },
    })
    t.list.field('FinancialHoldingFinancialAccount', {
      type: 'FinancialHolding',
      args: {
        where: 'FinancialHoldingWhereInput',
        orderBy: 'FinancialHoldingOrderByInput',
        cursor: 'FinancialHoldingWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'FinancialHoldingScalarFieldEnum',
      },
      resolve(root: any) {
        return root.FinancialHoldingFinancialAccount
      },
    })
    t.nullable.field('_count', {
      type: 'FinancialAccountCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
