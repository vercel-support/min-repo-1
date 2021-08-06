import { mutationField, nonNull } from 'nexus'

export const CampaignStatusDeleteManyMutation = mutationField(
  'deleteManyCampaignStatus',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'CampaignStatusWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.campaignStatus.deleteMany({ where } as any)
    },
  },
)
