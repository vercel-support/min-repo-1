import { mutationField, nonNull } from 'nexus'

export const OpportunityLossReasonUpdateOneMutation = mutationField(
  'updateOneOpportunityLossReason',
  {
    type: nonNull('OpportunityLossReason'),
    args: {
      where: nonNull('OpportunityLossReasonWhereUniqueInput'),
      data: nonNull('OpportunityLossReasonUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.opportunityLossReason.update({
        where,
        data,
        ...select,
      })
    },
  },
)
