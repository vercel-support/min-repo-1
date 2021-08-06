import { mutationField, nonNull } from 'nexus'

export const OpportunityUpdateManyMutation = mutationField(
  'updateManyOpportunity',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'OpportunityWhereInput',
      data: nonNull('OpportunityUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.opportunity.updateMany(args as any)
    },
  },
)
