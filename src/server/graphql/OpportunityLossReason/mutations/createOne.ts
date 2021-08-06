import { mutationField, nonNull } from 'nexus'

export const OpportunityLossReasonCreateOneMutation = mutationField(
  'createOneOpportunityLossReason',
  {
    type: nonNull('OpportunityLossReason'),
    args: {
      data: nonNull('OpportunityLossReasonCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.opportunityLossReason.create({
        data,
        ...select,
      })
    },
  },
)
