import { mutationField, nonNull } from 'nexus'

export const CampaignTypeDeleteManyMutation = mutationField(
  'deleteManyCampaignType',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'CampaignTypeWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.campaignType.deleteMany({ where } as any)
    },
  },
)
