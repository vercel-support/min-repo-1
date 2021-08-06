import { queryField, nonNull } from 'nexus'

export const CampaignMemberStatusFindUniqueQuery = queryField(
  'findUniqueCampaignMemberStatus',
  {
    type: 'CampaignMemberStatus',
    args: {
      where: nonNull('CampaignMemberStatusWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.campaignMemberStatus.findUnique({
        where,
        ...select,
      })
    },
  },
)
