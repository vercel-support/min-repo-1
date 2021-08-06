import { mutationField, nonNull } from 'nexus'

export const CampaignStatusDeleteOneMutation = mutationField(
  'deleteOneCampaignStatus',
  {
    type: 'CampaignStatus',
    args: {
      where: nonNull('CampaignStatusWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.campaignStatus.delete({
        where,
        ...select,
      })
    },
  },
)
