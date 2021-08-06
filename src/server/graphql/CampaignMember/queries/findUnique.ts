import { queryField, nonNull } from 'nexus'

export const CampaignMemberFindUniqueQuery = queryField(
  'findUniqueCampaignMember',
  {
    type: 'CampaignMember',
    args: {
      where: nonNull('CampaignMemberWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.campaignMember.findUnique({
        where,
        ...select,
      })
    },
  },
)
