import { mutationField, nonNull } from 'nexus'

export const OpportunityStageNameDeleteManyMutation = mutationField(
  'deleteManyOpportunityStageName',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'OpportunityStageNameWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.opportunityStageName.deleteMany({ where } as any)
    },
  },
)
