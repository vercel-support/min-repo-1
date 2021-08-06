import { queryField, nonNull } from 'nexus'

export const CampaignFindUniqueQuery = queryField('findUniqueCampaign', {
  type: 'Campaign',
  args: {
    where: nonNull('CampaignWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.campaign.findUnique({
      where,
      ...select,
    })
  },
})
