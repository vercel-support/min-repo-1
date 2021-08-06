import { mutationField, nonNull } from 'nexus'

export const OpportunityLossReasonUpdateManyMutation = mutationField(
  'updateManyOpportunityLossReason',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'OpportunityLossReasonWhereInput',
      data: nonNull('OpportunityLossReasonUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.opportunityLossReason.updateMany(args as any)
    },
  },
)
