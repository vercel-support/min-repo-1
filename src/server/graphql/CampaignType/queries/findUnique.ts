import { queryField, nonNull } from 'nexus'

export const CampaignTypeFindUniqueQuery = queryField(
  'findUniqueCampaignType',
  {
    type: 'CampaignType',
    args: {
      where: nonNull('CampaignTypeWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.campaignType.findUnique({
        where,
        ...select,
      })
    },
  },
)
