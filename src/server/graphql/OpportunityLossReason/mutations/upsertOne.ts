import { mutationField, nonNull } from 'nexus'

export const OpportunityLossReasonUpsertOneMutation = mutationField(
  'upsertOneOpportunityLossReason',
  {
    type: nonNull('OpportunityLossReason'),
    args: {
      where: nonNull('OpportunityLossReasonWhereUniqueInput'),
      create: nonNull('OpportunityLossReasonCreateInput'),
      update: nonNull('OpportunityLossReasonUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.opportunityLossReason.upsert({
        ...args,
        ...select,
      })
    },
  },
)
