import { mutationField, nonNull } from 'nexus'

export const OpportunityStageNameUpdateManyMutation = mutationField(
  'updateManyOpportunityStageName',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'OpportunityStageNameWhereInput',
      data: nonNull('OpportunityStageNameUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.opportunityStageName.updateMany(args as any)
    },
  },
)
