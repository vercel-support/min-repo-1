import { mutationField, nonNull } from 'nexus'

export const CampaignTypeDeleteOneMutation = mutationField(
  'deleteOneCampaignType',
  {
    type: 'CampaignType',
    args: {
      where: nonNull('CampaignTypeWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.campaignType.delete({
        where,
        ...select,
      })
    },
  },
)
