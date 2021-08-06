import { mutationField, nonNull } from 'nexus'

export const CampaignDeleteOneMutation = mutationField('deleteOneCampaign', {
  type: 'Campaign',
  args: {
    where: nonNull('CampaignWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.campaign.delete({
      where,
      ...select,
    })
  },
})
