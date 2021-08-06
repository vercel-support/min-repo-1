import { mutationField, nonNull } from 'nexus'

export const OpportunityTypeUpdateManyMutation = mutationField(
  'updateManyOpportunityType',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'OpportunityTypeWhereInput',
      data: nonNull('OpportunityTypeUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.opportunityType.updateMany(args as any)
    },
  },
)
